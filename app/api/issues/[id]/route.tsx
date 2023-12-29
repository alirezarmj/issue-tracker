import { issueSchema, patchIssueSchema } from "@/app/validationSchemas.ts";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { NextApiRequest } from "next";
import authOptions from "@/app/auth/authOptions";
import { getServerSession } from "next-auth";
import { error } from "console";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const body = await request.json();
  const validation = patchIssueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  if (body.assignedTouserId) {
    const user = await prisma.user.findUnique({
      where: { id: body.assignedTouserId },
    });
    if (!user)
      return NextResponse.json({ error: "Invalid User!" }, { status: 400 });
  }
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue)
    return NextResponse.json({ error: "Invalid Issue" }, { status: 404 });
  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: {
      title: body.title,
      description: body.description,
      assignedTouserId: body.assignedTouserId,
    },
  });
  return NextResponse.json(updatedIssue);
}

export async function DELETE(
  request: NextApiRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue)
    return NextResponse.json({ error: "Invalid Issue" }, { status: 404 });
  await prisma.issue.delete({ where: { id: issue.id } });
  return NextResponse.json({});
}

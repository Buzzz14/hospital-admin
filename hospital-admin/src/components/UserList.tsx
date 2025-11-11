"use client";

import React from "react";
import {
  useGetUsersQuery,
  useGetDoctorsQuery,
} from "../redux/features/users/usersApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { User } from "@/types";

export default function UserList() {
  const { data: users, error, isLoading } = useGetUsersQuery();
  const { data: doctors = [] } = useGetDoctorsQuery();

  const getDoctorName = (doctorId: string | null) => {
    if (!doctorId) return "N/A";
    const doctor = doctors.find((d: any) => d.id === doctorId);
    return doctor ? doctor.fullName : "Unknown Doctor";
  };

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Failed to load users.</p>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">User Records</h1>
      {users && users.length === 0 && <p>No users available.</p>}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Full Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Appointment</TableHead>
              <TableHead>Assigned Doctor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users?.map((user: User) => (
              <TableRow key={user.id}>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.appointmentTime || "N/A"}</TableCell>
                <TableCell>
                  {getDoctorName(user.assignedDoctor || null)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

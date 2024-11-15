import React from "react";
import StudentInfo from "./components/StudentInfo";
import StudentList from "./components/StudentList";

export default function App() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-4">Quản lý Sinh viên</h1>
      <StudentInfo />
      <StudentList />
    </div>
  );
}

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteStudent, setSearchQuery } from "../redux/studentSlice";

export default function StudentList() {
  const dispatch = useDispatch();
  const { students, searchQuery } = useSelector((state) => state.student);

  const filteredStudents = students.filter((student) =>
    student.fullname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">
        Danh sách sinh viên
      </h2>

      {/* Tìm kiếm */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          className="w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Bảng danh sách */}
      <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <thead className="bg-blue-600 text-white text-sm uppercase">
          <tr>
            <th className="p-4 text-left">Mã SV</th>
            <th className="p-4 text-left">Họ tên</th>
            <th className="p-4 text-left">Số điện thoại</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-center">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <tr key={student.id} className="border-t hover:bg-gray-100">
                <td className="p-4">{student.maSinhVien}</td>
                <td className="p-4">{student.fullname}</td>
                <td className="p-4">{student.soPhone}</td>
                <td className="p-4">{student.email}</td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => dispatch(deleteStudent(student.id))}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="p-4 text-center text-gray-500">
                Không có dữ liệu
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

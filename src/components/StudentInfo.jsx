import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addStudent } from "../redux/studentSlice";

export default function StudentInfo() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      maSinhVien: "",
      soPhone: "",
      fullname: "",
      email: "",
    },
    validationSchema: Yup.object({
      maSinhVien: Yup.number().required("Mã sinh viên không được để trống"),
      soPhone: Yup.string().required("Số điện thoại không được để trống"),
      fullname: Yup.string().required("Họ tên không được để trống"),
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Email không được để trống"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(addStudent({ id: Date.now(), ...values }));
      resetForm();
    },
  });

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">
        Thông tin sinh viên
      </h2>
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-6">
        {/* Mã sinh viên */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Mã Sinh Viên
          </label>
          <input
            type="number"
            {...formik.getFieldProps("maSinhVien")}
            className="w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          {formik.touched.maSinhVien && formik.errors.maSinhVien && (
            <span className="text-red-500 text-sm">
              {formik.errors.maSinhVien}
            </span>
          )}
        </div>

        {/* Số điện thoại */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Số Điện Thoại
          </label>
          <input
            type="text"
            {...formik.getFieldProps("soPhone")}
            className="w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          {formik.touched.soPhone && formik.errors.soPhone && (
            <span className="text-red-500 text-sm">
              {formik.errors.soPhone}
            </span>
          )}
        </div>

        {/* Họ tên */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Họ Tên
          </label>
          <input
            type="text"
            {...formik.getFieldProps("fullname")}
            className="w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          {formik.touched.fullname && formik.errors.fullname && (
            <span className="text-red-500 text-sm">
              {formik.errors.fullname}
            </span>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            {...formik.getFieldProps("email")}
            className="w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-500 text-sm">{formik.errors.email}</span>
          )}
        </div>

        {/* Nút Thêm */}
        <div className="col-span-2 text-right">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Thêm Sinh Viên
          </button>
        </div>
      </form>
    </div>
  );
}

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [], // Lưu danh sách sinh viên
  searchQuery: "", // Giá trị tìm kiếm
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent(state, action) {
      state.students.push(action.payload);
    },
    deleteStudent(state, action) {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
    updateStudent(state, action) {
      const index = state.students.findIndex(
        (student) => student.id === action.payload.id
      );
      if (index !== -1) {
        state.students[index] = action.payload;
      }
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const { addStudent, deleteStudent, updateStudent, setSearchQuery } =
  studentSlice.actions;

export default studentSlice.reducer;

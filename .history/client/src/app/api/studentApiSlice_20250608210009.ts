import { apiSlice } from "./apiSlice";
import type { Student, PaginatedStudentsResponse } from "../../types/StudentType";
import { STUDENT_URL } from "../constants";


export const studentApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getStudentsPage: builder.query<PaginatedStudentsResponse, number>({
            query: (page) => ({
                url: `${STUDENT_URL}?page=${page}`,
                method: "GET",
            }),
        }),
        getStudentById: builder.query<Student, string>({
            query: (id) => ({
                url: `${STUDENT_URL}/${id}`,
                method: "GET",
            }),

        }),
    })


});
export const {useGetStudentByIdQuery, useGetStudentsPageQuery} = studentApiSlice;

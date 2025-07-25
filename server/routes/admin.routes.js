import { Router } from "express";
// Middlewares
import authinticate from "../middlewares/authintication.middleware.js";
import authorize from "../middlewares/authorization.middleware.js";
import { createAdmin } from "../controllers/admin.controller.js";
import {
  getAdminById,
  updateAdmin,
  deleteAdmin,
  getPageOfAdmins,
} from "../controllers/admin.controller.js";
import {
  createStudent,
  deleteStudent,
  updateStudent,
} from "../controllers/student.controller.js";
import {
  createTeacher,
  deleteTeacher,
  updateTeacher,
} from "../controllers/teacher.controller.js";
import {
  createUniversity,
  updateUniversity,
} from "../controllers/university.controller.js";
import {
  updateCollege,
  createCollege,
} from "../controllers/college.controller.js";
import {
  validateObjectId,
  validateStudentUpdateData,
} from "../middlewares/validation.middleware.js";

const router = Router();

router
  .route("/")
  .get(authinticate, authorize(["super-admin"]), getPageOfAdmins);

router
  .route("/admin")
  .post(authinticate, authorize(["super-admin"]), createAdmin)
  .patch(authinticate, authorize(["super-admin"]), updateAdmin)
  .delete(authinticate, authorize(["super-admin"]), deleteAdmin);

router
  .route("/student")
  .post(authinticate, authorize(["admin", "super-admin"]), createStudent);
router
  .route("/teacher")
  .post(authinticate, authorize(["admin", "super-admin"]), createTeacher);

router
  .route("/university")
  .post(authinticate, authorize(["super-admin"]), createUniversity)
  .patch(authinticate, authorize(["admin", "super-admin"]), updateUniversity);

router
  .route("/university/college")
  .post(authinticate, authorize(["admin", "super-admin"]), createCollege)
  .patch(authinticate, authorize(["admin", "super-admin"]), updateCollege);

router
  .route("/:id")
  .get(authinticate, authorize(["super-admin"]), getAdminById);

router
  .route("/teacher/:id")
  .patch(authinticate, authorize(["admin", "super-admin"]), updateTeacher)
  .delete(authinticate, authorize(["admin", "super-admin"]), deleteTeacher);

router
  .route("/student/:id")
  .patch(
    authinticate,
    authorize(["admin", "super-admin"]),
    updateStudent
  )
  .delete(authinticate, authorize(["admin", "super-admin"]), deleteStudent);

export default router;

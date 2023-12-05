import express from "express";
import { PaymentController } from "./payment.controller";

const router = express.Router();
// {
//     "amount":4000,
//     "userId":"3f28a03d-81bf-421d-af4c-237b25a96abf",
//     "serviceid":"45e606fc-5e9c-40b3-be2e-6043452e9583",
//     "paymentStatus":"FULL_PAID",
//     "studentName":"Shahin",
//     "studentEmail":"sishain093@gmail.com",
//     "address":"ctg",
//     "transactionId":"hhhp",
//     "phone":"017777777"
//   }
router.post("/init", PaymentController.initPayment);

router.post("/webhook", PaymentController.webhook);

export const paymentRoutes = router;

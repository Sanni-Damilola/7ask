import { Router } from "express";
import {
  deletAllToDoList,
  deletOneToList,
  getAllData,
  getOneData,
  search,
  postToDoList,
  UpdateToDoListToDone,
  UpdateToDoListToInProgress,
} from "../Controller/Functions";

const route = Router();

route.route("/getall").get(getAllData);
route.route("/post").post(postToDoList);
route.route("/deleteall").delete(deletAllToDoList);
route.route("/delete/:id").delete(deletOneToList);
route.route("/search").get(search);
route.route("/update/:id").patch(UpdateToDoListToDone);
route.route("/inProgress/:id").patch(UpdateToDoListToInProgress);
route.route("/getone/:id").get(getOneData);

export default route;

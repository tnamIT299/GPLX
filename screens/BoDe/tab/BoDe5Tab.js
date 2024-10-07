import React from "react";
import BoDeTab from "../BoDeTab";
import { supabase } from "../../../data/supabaseClient";

const fetchBoDe5Data = async () => {
  const { data, error } = await supabase
    .from("ExamQuestion")
    .select("idExam, question(id,content, option, image, tip,typeQuestion)")
    .eq("idExam", 5);

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  return data;
};

const BoDe5Tab = ({ navigation }) => {
  return <BoDeTab fetchData={fetchBoDe5Data} idExam ="5" examTitle="Đề thi số 5" navigation={navigation} />;
};

export default BoDe5Tab;

import React from "react";
import BoDeTab from "../BoDeTab";
import { supabase } from "../../../data/supabaseClient";

const fetchBoDe8Data = async () => {
  const { data, error } = await supabase
    .from("ExamQuestion")
    .select("idExam, question(id,content, option, image, tip,typeQuestion)")
    .eq("idExam", 8);

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  return data;
};

const BoDe8Tab = ({ navigation }) => {
  return <BoDeTab fetchData={fetchBoDe8Data} idExam ="8" examTitle="Đề thi số 8" navigation={navigation} />;
};

export default BoDe8Tab;

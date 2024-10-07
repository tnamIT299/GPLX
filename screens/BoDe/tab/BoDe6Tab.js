import React from "react";
import BoDeTab from "../BoDeTab";
import { supabase } from "../../../data/supabaseClient";

const fetchBoDe6Data = async () => {
  const { data, error } = await supabase
    .from("ExamQuestion")
    .select("idExam, question(id,content, option, image, tip,typeQuestion)")
    .eq("idExam", 6);

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  return data;
};

const BoDe6Tab = ({ navigation }) => {
  return <BoDeTab fetchData={fetchBoDe6Data} idExam ="6" examTitle="Đề thi số 6" navigation={navigation} />;
};

export default BoDe6Tab;

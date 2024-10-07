import React from "react";
import BoDeTab from "../BoDeTab";
import { supabase } from "../../../data/supabaseClient";

const fetchBoDe7Data = async () => {
  const { data, error } = await supabase
    .from("ExamQuestion")
    .select("idExam, question(id,content, option, image, tip,typeQuestion)")
    .eq("idExam", 7);

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  return data;
};

const BoDe7Tab = ({ navigation }) => {
  return <BoDeTab fetchData={fetchBoDe7Data} idExam ="7" examTitle="Đề thi số 7" navigation={navigation} />;
};

export default BoDe7Tab;

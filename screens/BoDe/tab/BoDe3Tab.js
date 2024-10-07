import React from "react";
import BoDeTab from "../BoDeTab";
import { supabase } from "../../../data/supabaseClient";

const fetchBoDe3Data = async () => {
  const { data, error } = await supabase
    .from("ExamQuestion")
    .select("idExam, question(id,content, option, image, tip,typeQuestion)")
    .eq("idExam", 3);

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  return data;
};

const BoDe3Tab = ({ navigation }) => {
  return <BoDeTab fetchData={fetchBoDe3Data} idExam ="3" examTitle="Đề thi số 3" navigation={navigation} />;
};

export default BoDe3Tab;

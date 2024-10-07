import React from "react";
import BoDeTab from "../BoDeTab";
import { supabase } from "../../../data/supabaseClient";

const fetchBoDe1Data = async () => {
  const { data, error } = await supabase
    .from("ExamQuestion")
    .select("idExam, question(id,content, option, image, tip,typeQuestion)")
    .eq("idExam", 1);

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  return data;
};

const BoDe1Tab = ({ navigation }) => {
  return <BoDeTab fetchData={fetchBoDe1Data} idExam ="1" examTitle="Đề thi số 1" navigation={navigation} />;
};

export default BoDe1Tab;

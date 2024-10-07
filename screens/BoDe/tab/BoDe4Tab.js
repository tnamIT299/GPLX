import React from "react";
import BoDeTab from "../BoDeTab";
import { supabase } from "../../../data/supabaseClient";

const fetchBoDe4Data = async () => {
  const { data, error } = await supabase
    .from("ExamQuestion")
    .select("idExam, question(id,content, option, image, tip,typeQuestion)")
    .eq("idExam", 4);

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  return data;
};

const BoDe4Tab = ({ navigation }) => {
  return <BoDeTab fetchData={fetchBoDe4Data} idExam ="4" examTitle="Đề thi số 4" navigation={navigation} />;
};

export default BoDe4Tab;

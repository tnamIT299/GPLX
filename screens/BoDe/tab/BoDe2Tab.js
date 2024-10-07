import React from "react";
import BoDeTab from "../BoDeTab";
import { supabase } from "../../../data/supabaseClient";

const fetchBoDe2Data = async () => {
  const { data, error } = await supabase
    .from("ExamQuestion")
    .select("idExam, question(id,content, option, image, tip,typeQuestion)")
    .eq("idExam", 2);

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  return data;
};

const BoDe2Tab = ({ navigation }) => {
  return <BoDeTab fetchData={fetchBoDe2Data} idExam ="2" examTitle="Đề thi số 2" navigation={navigation} />;
};

export default BoDe2Tab;

import React from "react";
import { supabase } from "../../../data/supabaseClient";
import BoCauHoiTab from "../BoCauHoiTab";

const fetchToanBoCauHoi = async () => {
    const { data, error } = await supabase
    .from("question")
    .select("content, option, image, tip")

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  return data;
};

const ToanBoCauHoiTab = ({ navigation }) => {
  return <BoCauHoiTab fetchData={fetchToanBoCauHoi} navigation={navigation} />;
};

export default ToanBoCauHoiTab;

import React from "react";
import { supabase } from "../../../data/supabaseClient";
import BoCauHoiTab from "../BoCauHoiTab";

const fetchKyThuatLaiXe = async () => {
    const { data, error } = await supabase
    .from("question")
    .select("content, option, image, tip")
    .eq("typeQuestion", 3);

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  return data;
};

const KyThuatLaiXeTab = ({ navigation }) => {
  return <BoCauHoiTab fetchData={fetchKyThuatLaiXe}  navigation={navigation} />;
};

export default KyThuatLaiXeTab;

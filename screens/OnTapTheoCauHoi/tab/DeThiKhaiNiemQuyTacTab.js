import React from "react";
import { supabase } from "../../../data/supabaseClient";
import BoCauHoiTab from "../BoCauHoiTab";

const fetchKhaiNiemQuyTac = async () => {
  const { data, error } = await supabase
    .from("question")
    .select("content, option, image, tip)")
    .eq("typeQuestion", 1);

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  return data;
};

const DeThiKhaiNiemQuyTacTab = ({ navigation }) => {
  return <BoCauHoiTab fetchData={fetchKhaiNiemQuyTac} navigation={navigation} />;
};

export default DeThiKhaiNiemQuyTacTab;

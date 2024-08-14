import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import IconCard from '../../component/IconCard';

const LuatOto = () => {
  const data = [
    { iconName: 'traffic-light', label: 'Hiệu lệnh, chỉ dẫn', color: '#4CAF50' },
    { iconName: 'map-signs', label: 'Chuyển hướng', color: '#2196F3' },
    { iconName: 'parking', label: 'Dừng xe, đỗ xe', color: '#FFB74D' },
    { iconName: 'ambulance', label: 'Thiết bị ưu tiên, còi', color: '#FF3333' },
    { iconName: 'tachometer-alt', label: 'Tốc độ khoảng cách', color: '#FF6699' },
    { iconName: 'motorcycle', label: 'Vận chuyển người, hàng', color: '#4FC3F7' },
    { iconName: 'tools', label: 'Trang thiết bị phương tiện', color: '#8D6E63' },
    { iconName: 'ban', label: 'Đường cấm, đường một', color: '#90A4AE' },
    { iconName: 'wine-bottle', label: 'Nồng độ cồn, chất kích thích', color: '#00C5CD' },
    { iconName: 'id-card', label: 'Giấy tờ xe', color: '#FF6633' },
    { iconName: 'exclamation', label: 'Khác', color: '#FF9900' },
  ];

  const rows = [];  
  for (let i = 0; i < data.length; i += 3) {
    rows.push(data.slice(i, i + 3));
  }

  return (
    <View style={styles.container}>
      {rows.map((row, index) => (
        <View style={styles.row} key={index}>
          {row.map((item, itemIndex) => (
            <IconCard
              key={itemIndex}
              iconName={item.iconName}
              label={item.label}
              color={item.color}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default LuatOto;

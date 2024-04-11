// @ts-nocheck
"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const category = {
  HEAT_STORAGE_COOLING_EQUIPMENT_AND_MATERIALS:
    "HEAT_STORAGE_COOLING_EQUIPMENT_AND_MATERIALS",
  INTEGRATED_ENERGY_SYSTEM_FOR_GENERATION:
    "INTEGRATED_ENERGY_SYSTEM_FOR_GENERATION",
  HYDROGEN_AMMONIA_HYDROGEN_FUSION_TECHNOLOGY:
    "HYDROGEN_AMMONIA_HYDROGEN_FUSION_TECHNOLOGY",
  TEACHING_SCIENTIFIC_LABORATORY_EQUIPMENT:
    "TEACHING_SCIENTIFIC_LABORATORY_EQUIPMENT",
};
const categoryChineseMap = {
  HEAT_STORAGE_COOLING_EQUIPMENT_AND_MATERIALS: "储热/蓄冷设备及材料",
  INTEGRATED_ENERGY_SYSTEM_FOR_GENERATION: "源网荷储综合能源系统",
  HYDROGEN_AMMONIA_HYDROGEN_FUSION_TECHNOLOGY: "氢能、氨氢融合技术",
  TEACHING_SCIENTIFIC_LABORATORY_EQUIPMENT: "教学及科学实验仪器",
};
// @ts-ignore
function CategorySelector({ currentSelection, onChange }) {
  return (
    // @ts-ignore
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">
          {currentSelection
            ? categoryChineseMap[currentSelection]
            : "请选择类别"}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" onAction={onChange}>
        <DropdownItem
          key={category.HEAT_STORAGE_COOLING_EQUIPMENT_AND_MATERIALS}
        >
          {
            categoryChineseMap[
              category.HEAT_STORAGE_COOLING_EQUIPMENT_AND_MATERIALS
            ]
          }
        </DropdownItem>
        <DropdownItem key={category.INTEGRATED_ENERGY_SYSTEM_FOR_GENERATION}>
          {categoryChineseMap[category.INTEGRATED_ENERGY_SYSTEM_FOR_GENERATION]}
        </DropdownItem>
        <DropdownItem
          key={category.HYDROGEN_AMMONIA_HYDROGEN_FUSION_TECHNOLOGY}
        >
          {
            categoryChineseMap[
              category.HYDROGEN_AMMONIA_HYDROGEN_FUSION_TECHNOLOGY
            ]
          }
        </DropdownItem>
        <DropdownItem key={category.TEACHING_SCIENTIFIC_LABORATORY_EQUIPMENT}>
          {
            categoryChineseMap[
              category.TEACHING_SCIENTIFIC_LABORATORY_EQUIPMENT
            ]
          }
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default CategorySelector;

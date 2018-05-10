import { IGradeAndClassSelectMapState } from "../../../../containers/common/gradeAndClassSelect/gradeAndClassSelectContainer.type";

export interface IGradeAndClassSelectProps extends IGradeAndClassSelectMapState {
  canChange?: boolean;
  defaultGrade?: number;
  defalutClass?: number;
  receiveGrandAndClass: (grade: number, classNum: number) => void;
}

export interface IGradeAndClassSelectState {
  garde: number;
  classNum: number;
}
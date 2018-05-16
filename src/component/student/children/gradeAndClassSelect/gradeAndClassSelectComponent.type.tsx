import { IGradeAndClassSelectMapState } from "../../../../containers/common/gradeAndClassSelect/gradeAndClassSelectContainer.type";

export interface IGradeAndClassSelectProps extends IGradeAndClassSelectMapState {
  canChange?: boolean;
  grade?: number;
  classNum?: number;
  defaultGrade?: number;
  defalutClass?: number;
  selectWidth?: number;
  selectSize?: "default" | "large" | "small" | undefined;
  receiveGradeAndClass?: (grade: number, classNum: number) => void;
}

export interface IGradeAndClassSelectState {
  garde: number;
  classNum: number;
}
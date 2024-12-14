export interface VoiceStyleButtonProps {
  style: string;
}

export interface VoiceSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}
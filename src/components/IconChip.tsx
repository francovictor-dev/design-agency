"use client";

interface IconChipProps {
  svg: React.ReactNode;
}

export default function IconChip({ svg }: IconChipProps) {
  return (
    <main className="flex justify-center items-center w-24 h-24 rounded-[20px] bg-green-200">
      {svg}
    </main>
  );
}

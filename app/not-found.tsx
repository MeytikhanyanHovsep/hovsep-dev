import Container from "@/components/ui/container";
import React from "react";

export default function NotFound() {
  return (
    <Container id="not-found">
      <div className="grid place-items-center h-[200px]">
        <p className="text-[80px] text-center">404</p>
      </div>
    </Container>
  );
}

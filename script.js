const card1 = document.querySelectorAll("#picture1");

card1.forEach((card) => {
  let isScaled = false; // 상태 추적

  card.addEventListener("click", () => {
    if (!isScaled) {
      card.style.animation = "scaleAndCenter1 1.2s forwards"; // 확대 및 중앙으로 이동
      isScaled = true;
    } else {
      card.style.animation = "reverseScaleAndCenter1 1.2s"; // 원래 위치로 돌아가기
      isScaled = false;
    }
  });
});

const card2 = document.querySelectorAll("#picture2");

card2.forEach((card) => {
  let isScaled = false; // 상태 추적

  card.addEventListener("click", () => {
    if (!isScaled) {
      card.style.animation = "scaleAndCenter2 1.2s forwards"; // 확대 및 중앙으로 이동
      isScaled = true;
    } else {
      card.style.animation = "reverseScaleAndCenter2 1.2s"; // 원래 위치로 돌아가기
      isScaled = false;
    }
  });
});

const card3 = document.querySelectorAll("#picture3");

card3.forEach((card) => {
  let isScaled = false; // 상태 추적

  card.addEventListener("click", () => {
    if (!isScaled) {
      card.style.animation = "scaleAndCenter3 1.2s forwards"; // 확대 및 중앙으로 이동
      isScaled = true;
    } else {
      card.style.animation = "reverseScaleAndCenter3 1.2s"; // 원래 위치로 돌아가기
      isScaled = false;
    }
  });
});

const card4 = document.querySelectorAll("#picture4");

card4.forEach((card) => {
  let isScaled = false; // 상태 추적

  card.addEventListener("click", () => {
    if (!isScaled) {
      card.style.animation = "scaleAndCenter4 1.2s forwards"; // 확대 및 중앙으로 이동
      isScaled = true;
    } else {
      card.style.animation = "reverseScaleAndCenter4 1.2s"; // 원래 위치로 돌아가기
      isScaled = false;
    }
  });
});

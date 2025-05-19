const question = [
  {
    ques: "What is 2+2?",
    answer: "4",
    options: ["7", "3", "10", "4"],
  },
  {
    ques: "What is 2+3?",
    answer: "5",
    options: ["1", "3", "9", "5"],
  },
  {
    ques: "What is 2+4?",
    answer: "6",
    options: ["7", "3", "10", "6"],
  },
];
let index = 0;
let right = 0;

let content = document.querySelector("#main");
let inputs = Array.from(document.querySelectorAll("input"));
let labels = Array.from(document.querySelectorAll("label"));

const loadQues = () => {
  console.log("question[index].ques is :" + question[index].ques);

  document.getElementById("question").innerText = question[index].ques;
  const option = question[index].options;
  labels.forEach((label, ind) => (label.innerText = option[ind]));
};

const checkCorrect = () => {
  let selected;
  for (const input of inputs) {
    if (input.checked) {
      selected = input.nextElementSibling.innerText;
      console.log("selected is :" + selected);
      break;
    }
  }
  if (selected === question[index].answer) {
    right++;
  } else if (!selected) {
    console.warn("no option selected");
    return;
  }
};

loadQues();

const button = document.querySelector("button");
button.addEventListener("click", checkAnswer);

function checkAnswer() {
  console.log("index is :" + index);

  checkCorrect();

  console.log("right is :" + right);

  inputs.forEach((input) => {
    input.checked = false;
  });

  if (!(index < question.length - 1)) {
    content.innerHTML = `<h1>${right}/${question.length} are correct
    <br>Thank for attending test</h1>`;
    content.style.textAlign = "center";
    return;
  }
  index++;
  loadQues();
}

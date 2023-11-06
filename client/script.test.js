// functions to test: 
// fetchQuestions
// Check Answer
// 


// const { checkAnswer } = require('./script')
// const sampleData = {
//     answers: [
//         {text: 'Correct Answer', value: 1},
//         {text: 'Wrong Answer', value: 0},
//         {text: 'Another Wrong Answer', value: 0},
//         {text: 'Yet Another Wrong Answer', value: 0},
//     ]
// }

// describe ('checkAnswer function', () => {
//     test('Correct Answer', ()=> {
//         checkAnswer(sampleData);
//         document.querySelector('#option1').click();
//         expect(alert).toHaveBeenCalledWith('success');
//     });

//     test('Incorrect Answer', ()=> {
//         checkAnswer(sampleData);
//         document.querySelector('#option2').click();
//         expect(alert).toHaveBeenCalledWith(`wrong, the correct answer is ${correctAnswer}`);
//     });
    
// });


describe("checkAnswer", () => {
    it("Is a function", () => {
      expect(countValues).toBeDefined();
      expect(countValues instanceof Function).toEqual(true);
    });
})


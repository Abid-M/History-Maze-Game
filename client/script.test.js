/**
 * @jest-environment jsdom
 */



const { checkAnswer, fetchQuestions } = require('./script')

const sampleData = {
  answers: [
      {text: 'Correct Answer', value: 1},
      {text: 'Wrong Answer', value: 0},
      {text: 'Another Wrong Answer', value: 0},
      {text: 'Yet Another Wrong Answer', value: 0},
  ]
}


describe("checkAnswer", ()=>{
  afterEach(() => {
    jest.restoreAllMocks();
  })

  test("exists", ()=>{
    expect(checkAnswer).toBeDefined()
  })
  test("is a function", ()=>{
    expect(checkAnswer instanceof Function).toEqual(true)
  })
  xtest('Correct Answer', ()=> {
    const parser = DOMParser();
    jest.spyOn(document, 'querySelector').mockImplementation(selector => dom.querySelector(selector))
      checkAnswer(sampleData);
      document.querySelector('#option1').click();
      expect(alert).toHaveBeenCalledWith('success');
  });
  


})

describe("fetchQuestions", ()=>{
  test("exists", ()=>{
    expect(fetchQuestions).toBeDefined()
  })
  test("is a function", ()=>{
    expect(fetchQuestions instanceof Function).toEqual(true)

})

})



/*
const sampleData = {
    answers: [
        {text: 'Correct Answer', value: 1},
        {text: 'Wrong Answer', value: 0},
        {text: 'Another Wrong Answer', value: 0},
        {text: 'Yet Another Wrong Answer', value: 0},
    ]
}

describe ('checkAnswer function', () => {
    test('Correct Answer', ()=> {
      const parser = DOMParser();
      jest.spyOn(document, 'querySelector').mockImplementation(selector => dom.querySelector(selector))
        checkAnswer(sampleData);
        document.querySelector('#option1').click();
        expect(alert).toHaveBeenCalledWith('success');
    });

    test('Incorrect Answer', ()=> {
        checkAnswer(sampleData);
        document.querySelector('#option2').click();
        expect(alert).toHaveBeenCalledWith(`wrong, the correct answer is ${correctAnswer}`);
    });
    
});

*/ 

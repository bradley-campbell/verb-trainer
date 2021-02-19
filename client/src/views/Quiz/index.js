import React from "react";
import QuizInput from "../../components/QuizInput";
import { useSelector, useDispatch } from "react-redux";
import { setResults } from "../../redux/verbDataSlice";

const Quiz = () => {
  const dispatch = useDispatch();

  const {
    query: { verb, mood, tense },
  } = useSelector((state) => state.verbQuery);

  const handleFetch = async () => {
    const response = await fetch(
      `/table?verb=${verb}&mood=${mood}&tense=${tense}`
    );
    const verbTable = await response.json();
    dispatch(setResults(verbTable.data));
  };

  return <QuizInput handleFetch={handleFetch} />;
};

export default Quiz;

//     <Wrapper>
//       <h1>QUIZ</h1>
//       <ChooseVerb />

//       {verbTable.data && (
//         <>
//           <Form
//             className={classes.root}
//             noValidate
//             autoComplete="off"
//             onSubmit={handleSubmit}
//           >
//             <h1>
//               {mood} - {temps}
//             </h1>
//             <h1>{verb}</h1>
//             <QuizFields>
//               <QuizColumn>
//                 <Input placeholder="Je" personne="s1" />
//                 <Input placeholder="Tu" personne="s2" />
//                 <Input placeholder="Il/Elle/On" personne="s3" />
//               </QuizColumn>
//               <QuizColumn>
//                 <Input placeholder="Nous" personne="p1" />
//                 <Input placeholder="Vous" personne="p2" />
//                 <Input placeholder="Ils/Elles" personne="p3" />
//               </QuizColumn>
//             </QuizFields>

//             {result && <h1>{result}</h1>}

//             <ButtonDiv>
//               <SubmitButton />
//             </ButtonDiv>
//           </Form>
//         </>
//       )}
//     </Wrapper>
//   );

// const handleFetch = async (query, setVerbTable) => {
//   const response = await fetch(`/table?verb=${query.verb}`);
//   const verbTable = await response.json();
//   setVerbTable({ data: verbTable.data });
// };

// const handleSubmit = (e) => {

//   e.preventDefault();
//   if (
//     JSON.stringify(verbTable.data[mood][temps]) === // Compare user response with fetched verb table
//     JSON.stringify(userResponse)
//   ) {
//     console.log("good job!"); // TODO - If there's a match, the user should see a message
//     setResult("Good job!");
//   } else {
//     setResult("Try again"); // TODO - If there's no match, the user should see a message - maybe event a count of how many fields match
//   }
// };

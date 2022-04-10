import React, { useEffect, useState } from "react";
import { RaiseSection, RHead,RHead2, Title, Description, EachStep } from './RaiseStyling'
import { Container } from "react-bootstrap";
import axios from 'axios';

const Raises = () => {

  const [raises, setRaises] = useState([]);

  useEffect(() => {
      sendApiRequest();
  }, []);

  const sendApiRequest = async () => {
      try {
          const response = await axios.get(
              'http://localhost:5000/api/raises/'
          );
          setRaises(response.data);
          console.log(response);
          localStorage.setItem('token', response.data.token);
      } catch (err) {
          console.log(err);
      }
  };

   return (
      <RaiseSection>
          <RHead> Important Steps that helps in raising a Pet </RHead>
          <RHead2> It is important to know how the animal will react at home on the street and even with other people, we must also now what to do about it. Always with patience and lots of affection.</RHead2>
          <Container>
          {
            raises.map((raise) => {
              return(
                <EachStep>
                  <Title>  {raise.title}  </Title>
                  <Description>  {raise.description}  </Description>                               
                                                  
               </EachStep> 

              )
            })
          }
         </Container>
      </RaiseSection>
  );
};

export default Raises;




















// const Raise=()=> {
//   const url="http://localhost:5000/api/raises" 
//   const[raises,setRaises]=useState([]) 
//   const [data, setData] = useState({
//       title: "",
//       description:"",
//      })

//   function handle(p){
//       const newdata={...data}
//       newdata[p.target.id]=p.target.value
//       setData(newdata)
//       console.log(newdata)

//   }
//   function submit(p){
//       p.preventDefault();
//       axios.post(url,{
//           title:data.title,
//           description:data.description,
//           })
      
//           .then(res=>{
//           console.log(res.data)
//       })

//   }
//   const getRaises = async () => {
//       const response = await axios.get(
//         'http://localhost:5000/api/raises/'
//       );
//       setRaises(response.data);
      

//    };


//   useEffect(()=>{
//     getRaises();
//   },[])


//   return (
//    <>
//       <div class= "raise">
//       <RaiseStylediv>
//        <h1> Important Steps that helps in raising a Pet</h1>
//        <h3>It is important to know how the animal will react at home, on the street
//           and even with other people, we must also know what to do about it. Always with 
//           patience and lots of affection.</h3>
                   
                 
//          <h2>Life Balance</h2>
//        <p>Your pet is part of your family it's important to manage your time properly.
//         We are all pretty busy especially if we are parents shuttling our children
//          around to their various sports and hobbies. Juggling that with work and a
//           pet, it is essential you schedule time in your calendar for you, your pet,
//            and your family.
//        </p>
//        <h2>Set Limits</h2>
//        <p>Just like children, dogs thrive on rules and structure.  Your dog should have 
//          a clear and consistent set of rules that everyone in the house follows with the 
//          dog. 
//          <br />
//          My favorite is wait at the door.  Teach your dog he may not run through doors 
//          to the outside without your permission.  Make sure everyone in the house follows 
//          this rule - Always! Keep in mind, dogs are very bad at generalizing.  This means 
//          that you should not let your dog jump on you when wearing workout clothes, but yell 
//          at him when he jumps on your work clothes. This will only confuse or frustrate your 
//          dog and cause naughty behavior.</p>
//        <h2>Responsibilty</h2>
//        <p>Responsibility goes both ways.  It is up to you to learn how to positively train 
//          your dog so he understands what you want.  Often dogs misbehave because training has 
//          not been practiced enough, the instructions were not clear, or you expected too much 
//          out of the dog too soon.  Rewards such as treats and play are used as communication 
//          with the dog throughout the learning process.  Since your dog cannot ask you questions, 
//          he must learn through trial and error.  There will be a lot of rewards given in the 
//          beginning.  Then it is your dog's responsibility to learn that he does not get a reward 
//          for every single cue (command) given. Once your dog can follow a cue successfully at 
//          least 80% of the time, start fading out the rewards.
//           </p>
//        <h2>Giving Space</h2>
//        <p>
//        Dogs need space to be a dog. I often see owners getting frustrated with their dog's
//         during a walk because they are pulling them from one thing to the next. Other owners
//          have dogs walking down the street in a heel position head down and tail still.   
//         We often forget how unnatural it is for a dog to walk by our side down a street for
//           long periods of time.  It is much like expecting a three year old to walk through 
//           a toy store without pulling you to look at any of the toys on the shelves. 
//        </p>
//        <h2> Foster Good Self Esteem</h2>
//        <p>
//        Dogs have self esteem?  You bet. Dogs are creatures that learn. Mistakes are part of
//         learning. Pet owners need to be careful to let their dog work out problems for 
//         themselves.  Do not micromanage or help them too much, especially when they are 
//         trying to learn something new.  Just stand back and give them a few seconds to work
//          it out.  If they get confused, just restart the challenge in an easier form or give
//           your dog a hint.
//          For example, you are trying to teach your dog to sit. Rather than pushing on his
//           hind end, pulling on the leash,  or repeating "sit, sit, sit," stand silent and 
//           wait. If he needs help, restart the problem by backing up several steps, say "sit" 
//           once, pause a second, then lure his nose up and back with a treat in your hand. 
//           Reward!
//        </p>
//        <h2>Love your Pet</h2>
//        <p>
//        You have this dog for the rest of his life. Sometimes it is hard to enjoy your dog 
//        after he misbehaved. Remind yourself to love your dog independent of his behavior. 
//        He loves you unconditionally.
//        </p>
//      </RaiseStylediv>
//           {
//             raises.map((currElem)=>{
//               return(
//           <div>
//             <h1>Title: {currElem.title}</h1><br/>
//               <h2>Description: {currElem.description}</h2>
              
//           </div>
//               )
//             })}

//       </div>
//    </>
//   );
// }


















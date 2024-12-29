/**
 * I have a frontend application that sends a couple of prompts that will be used to generate a response.
 * now, for the first, i have an option where on the frontend, the user can select that they are a recruiter,
 * i ask them the role they are hiriing for as well as the tech stack they are hiring for.
 *
 * I want to create a prompt that generates the right response based on these two inputs.
 * I will use the input with my work experience to generate the prompt.
 *
 *
 */

export const ROLES = {
  RECRUITER: 'RECRUITER',
  COLLEAGUE: 'COLLEAGUE',
  VISITOR: 'VISITOR',
  FRIEND: 'FRIEND',
};

export const prompts = {
  [ROLES.RECRUITER]: (context: { first: string; second: string }) => `
    A recruiter is hiring for a role in a tech company. The role is ${context.first} and these are the tech stack they are hiring for: ${context.second}.
    I have worked for three years in tech, and I am currently a Lead frontend developer at a company. Where I have woorked with 
    Android Studio, Xcode, React Native, React, Next.js. I am a full stack developer and I have done a lot of backend work with NestJs,
    Node.js, Express, MongoDB, PostgreSQL, MySQL, and Redis. I recently started working with integration of AI tools like OpenAI, Anthropic,
    into existing products. My strength is in frontend development. Now, using the above information, generate a prompt that will be used to generate a response to the recruiter.
    `,
  [ROLES.COLLEAGUE]: (context: { first: string; second: string }) => {
    // i have worked in the following places
    // - Send
    // - Bookr

    // now based on where context.first is, which is the compan name, I will use a couple of prompt

    let keywords = '';
    switch (context.first) {
      case 'Send':
        keywords =
          'fast paced, hands on, extra hours, missed townhall meetings, never came to the office, Richard was a great guy, I believed i was the funiest guy on the enginerring team';
        break;
      case 'Bookr':
        keywords =
          'Bookr, great company, Juan is like gilfoyle from silicon valley, Adrian the funny gym guy, Ana voice, Erika rejecting tasks as QA, the november 2023 event that nearly killed the company, khalas,';
        break;
      default:
        keywords =
          'maybe we worked together in an internship, i do not miss you, your code probably suck if you wrote one, just kidding, it was nice working with you.';
    }

    return `
     I worked with a coworker for ${context.second} years. and in that time, I assume we had a good relationship.
     Now, I want you to generate a prompt that reurns a funny response that can apply to any coworker, based on the keywords below:
     ${keywords}
    `;
  },

  [ROLES.VISITOR]: (context: { first: string; second: string }) => `
    For the show ${context.first}, tell me ${context.second} hidden facts that you think most people would have missed or fascinated about.
    `,

  // for the friend, I want to tell them a piece of myself based on what they call me and where they know me from
  [ROLES.FRIEND]: (context: { first: string; second: string }) => `
  I want to tell you a piece of myself based on what you call me and where you know me from.
  This is what you call me: ${context.first}
  This is where you know me from: ${context.second}

  Now, if they knew me from school, then generate a prompt telling them that school was fun but i was massively lazy. I would have been a great student if i had the motivation.
  Also, those were the best years of my innocent life before adult life hit me. I probably good to them, if I was not, then they were a bad person.

  If they knew me in Abuja, then they probably know a version of me that is not the real me. I am a very introvert person, and I am not the kind of person that would go out and party.
  But that does not mean I was a fake, just that there is a lot of fugazzi in Abuja. Also, our relationship is probably either very surface level or veery deep. no in between. They can tell 
  how close we are if they knew my middle name.

  If they called me Femi, that is the faintest identity of me, femi is a persona that I created for myself. I am not Femi, and whatever you know about Femi was entirely made up. Not to say they where
  fake, but they are a different person from Joseph.


  if they called me Olorungbon, they know me deeply and probably knew me from the time i was a child. They know an introvert and a shy person. They are also the ones that know my middle name. 
  we might be family friends or just friends.

  if they called me Joseph, then they know me well. I am a very open person, and I am not the kind of person that would hide my feelings. I am a very good listener, and I am a good friend.

  if they knew me from NYSC, they also know a very differnt version of me. I was very shy and it was a very unique time for me as it formed the current version of me. we probably had a good relationship, 
  except you were very promiscuous, which i did not support (laughter).

  If they called me joeblaq, Joe black or any variation of that, then they know me from FUT and know a very different version of me, although I still remain the same person in the core of my being.
        `,
};

# Git Push Master - Warmup Retrospective

## Team Dynamic
We are proud of the work that we did this past week, and how we grew together as a team. There was a very good team dynamic, and we all got along with eachother pretty well.

## Workstyle
We worked synchronously for the most part, which had a lot of challenges.
- As a whole team, together in a meeting we would work through each section of the homework live, with the exception of wrapping up Part 3.
- The positive side is that we got everyone to participate, it gave everyone a chance to get to know eachother better, and we were able to have quick communication about gaps in understanding and make concise decisions
- The negative side, is that it was innefficient, or at least it would be for a larger project.
  - There was a lot done that could be done in parallel, if we had taken the time to write design document of the software, delegate which parts of the software to different people
  - For example, we could have said at the beginning "We're going to be using a custom component architecture - the custom component will have x and y attributes, and the user can optionally provide their own div/span for footnotes, we expect this kind of styling with CSS", etc.
    - Then, we could have prtitioned our team to work on CSS/styling the buttons, styling the popovers, and another for doing to open/close functionality in JS.
    - We could have taken it a step further, and said "the JS script will look like this, calling these functions (which are to be implemented) on these events" and had people implement the given functions (like popover open, and popover close) in parallel.
  - However, you can see that for such a small project, the amount of effort it would have taken to take this more formal route of coordinating and splitting the project up like this, would have taken much more effort than us all group programming the small JS file together. Once the fundamentals were down however/our MVP was implemented, we were able to split work up effectively.

## Communication/Collaboration
We were able to plan meetings pretty effectively where everyone joined. Additionally, used Mattermost + a WhatsApp group for more immediate notifications for people who had trouble getting notified by Mattermost. 
- Everyone has been responsible in messages in the team chat. All people participated and were able to contribute to design decisions for tinyfoot
- Gives a good idea for how collaboration and communication will go in the future, although we will try to delegate more work to be done in parallel.
  - We will likely have sub-teams/verticals of the project in the future, and try to switch people throughout subteams so that everyone gets a chance to work on different parts of the codebase. 
- The flexibility of our meeting schedule was beneficial, and each session was helpful in that we were able to share what each of us have learned independently. We will likely keep this format of async work + synchronous sharing for the final project.
- We made sure to spend time to ensure that everyone was able to follow what we were working on at any given point, and that nobody was lost or left behind. For example, taking the extra time needed to make sure everyone got their machine properly set up. Everyone feels much more prepared to work on the actual project now.
- Most importantly, there was a sense of psychological safety, where we all felt safe disagreeing and providing new perspectives for how we should go about different architectural decisions in the project. This really helped us have a more diverse set of ideas to choose from when architecting our project, and is something we will definitely need to persist for the final project. 
- We also had a good time exploring the CSE building with most people for the first time, poking around ChezBob and the grad student lounge!
- Overall, we have a great team dynamic and work ethic, and are confident in our ability to adapt to the change in scope of our work in the final project.

## Technical Learnings
Many team members have very limited experience with web dev, but learned a lot during the warmup.
- We felt that littlefoot was easier to understand that bigfood, but learned that it could be much, much simpler than either. This is why we opted for reducing bloat, and limiting our solution to JS and CSS
- Running bigfoot and littlefoot locally on everyones machines was a pain, as everyone has different operating systems, and many of the build scripts were built for linux
  -  We ended up using Github Codespaces to make sure that everyone was working on a similar machine, which was extremely helpful. Once we made that decision it was smooth going forward, but it might be worth looking into getting everyone using Docker for the final project instead so we may all work locally in the same virtual environment, and same defined dependencies.
- Again, taking time out of meetings to ensure everyone understood topics we were discussing was very helpful

# Summary
Overall, even though there is much we would like to change with tinyfoot, we feel we did a great job growing as a team, socially and technically. We feel this warmup effectively prepared us for the final project, and we're excited to get started!

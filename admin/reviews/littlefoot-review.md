# Team 5 - Littlefoot Review Doc

## Pros
There are a lot of pros when looking at littlefoot, including:

### It's very user friendly!
  - It's easier to implement compared to bigfoot
    - getting it up and running was as easy as opening a premade html file (since the library was hosted online)
    - This could be considered a con if people rely on this online hosted version, and it goes down. Might persuade people to write unmaintainable

### Documentation is a lot easier to read, it contains a provided html demo file
  - Documentation also gives implementation details (straight up code that you can use)
  - All information needed to get the project running exists in github/the repo, and you don't need to go to external sources. It's the single source of truth!
  - Logic is implemented in separate files, makes it easier to see whats going on vs. bigfoots single huge coffee file
 
### CI/CD exists here that does not exist in bigfoot, the project seems to be a lot more maintainable in general
  - There exist tests on all pull requests checking for:
    - Code coverage
    - Code correctness
    - Code style linting
    - Commit style linting
  - There exist changelogs, noting what happened between versions
  - The last commit was 4 days from writing this, meaning its still updated and maintained. It's likely easier to maintain due to this process
   
### Easy to build
  - npm is newer (recency bias), and it also has a lot more scripts associated with it regarding building/cleaning/releasing. Overall though, it has similar abilities to bigfoots Gruntfile

 Overall, many of the strengths regarding Littlefoot are due to the repo itself being set up with modern practices for building maintainable practices, such as good documentation, changelogs, and CI/CD

## Cons

 There are some cons as well:

 ### Bulky repo with many dependencies
 - The repo is way bigger/bulkier than bigfoot for what is essentially the same functionality
   - typescript is more modern, but its just another dependency similar to how coffee is
   - CI/CD is very nice, but might be a little bit overkill for what should essentially be a simple piece of code
   - The source code itself is about the same size as bigfoots source code, and while separate files are nice, there is no explicit documentation regarding the file structure, and what I should expect to live within each file
  
## Overall


### Would we use it or not?
I think we would. It's more developer friendly, and its ease of use allows for less boilerplate code than bigfoot in order to achieve functionality. Bigfoot has the advantage of "standing the test of time", and we know that if it has survived the past decade, it might survive the next one and be easy to assume its maintainable. However, we don't know that this isn't true of Littlefoot, and since its well maintained, has proper CI/CD, we assume that the chances are high that this could be long lived as well.

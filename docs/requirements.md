# Sorting Hat

This assignment is inspired by the Sorting Hat: a magic item that assigns first-year students at Hogwarts School of Witchcraft and Wizardry a place in the Gryffindor, Hufflepuff, Ravenclaw, or Slytherin Houses.

The Sorting Hat makes instantaneous decisions sometimes, but other times it converses with the student first. Your application should simulate this sorting process.

Read the instructions carefully and ask for clarification if needed.

Note that there is a minimimal viable product (MVP) and many stretch goals. Complete the MVP first, then do as many of the stretch goals as you can during the time allowed.

Do NOT change your master branch after 5pm. If you enjoyed the assignment and want to continue, create a branch and save your post-deadline activities there until after the assignment is graded.

If the Potterverse is not your fandom, you may change the theme to better suit your interests. You'll need to create your own data file (model it after the one provided - using a complex data object is part of the assignment). All the MVP requirements and stretch goals still apply.

You may change the data file - adding, removing, or modifying data - but it should remain a nontrivial structure that includes objects and arrays.

At the minimum, use Vue, JavaScript, HTML, and CSS to complete this assignment.

## MVP

1. Upon initial page load, randomly determine a Hogwarts House for the user. Use the data file provided, or a similar one of your own creation.

2. Using Vue components, display a "Welcome to..." message and some basic information about that House.

3. Style your application. It's okay to start with Bootstrap, but make at least some customizations above what the framework provides.

4. Save your code in a public github repo.

5. Push your finished code to Heroku.

6. Send links to your github repo and Heroku application to your instructors.

## Stretch Goals

* Have fun with styling. Practice your CSS and do something really cool.

* Remember which House was selected and display a "Welcome back to..." message if the user returns to your application. (Hint: use localStorage).

* Provide a "Sort Again" button that clears any saved data and allows the user to be sorted again.

* Add a random delay of 0 to 30 seconds to the sorting. During that wait, display a spinner so the user knows the Sorting Hat is thinking.

* Ask a random number of questions, 0 to 5, before the Sorting Hat decides. There are sample questions in the provided data file. Choose the House most often selected in the answers to these questions.

* Randomize the order of the questions so that Question 1 isn't the same for every user every time.

* Randomize the order of the answers to each question so that a user can't choose 'A' all the time to deliberately place themselves in Gryffindor.

* Provide cryptic feedback from the Sorting Hat after every question, such as "That's interesting!" or "Really...!"

* On initial page load, allow users to select their wizarding school. There are 11 to choose from, but we only have House information for a few so not every school choice wil lead a user to a Sorting Hat-like experience. See: https://www.pottermore.com/collection/wizarding-schools

## Pushing a vue-cli webpack-simple project to Heroku

1. Remove the /dist directory from your .gitignore file.

2. From the main directory of your project:

    $ npm run build

3. Install an Express server, configure index.js, and create a Procfile as usual.

4. Push committed code to Heroku as usual.
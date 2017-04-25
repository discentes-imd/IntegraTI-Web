# Contributing guidelines

## What is this?

Like every free source repository, following [GitHub's recommendation](https://github.com/blog/1184-contributing-guidelines) 
and being inspired by [puppetlabs](https://github.com/puppetlabs/puppet/blob/master/CONTRIBUTING.md) and 
[factory_girl_rails](https://github.com/thoughtbot/factory_girl_rails/blob/master/CONTRIBUTING.md)... 
there's our contributing guidelines! Keep **aways** these instructions in mind if you want to help our API development.

(This file sometimes assumes you're already a team member. Full public contributions guidelines will be available soon.)

We git merge approved branchs every Tuesday.

## Getting started

Workflow:
* Have a [GitHub](https://github.com/) account
* Make sure you know how to use git (here's a [quickstart in Portuguese](http://rogerdudler.github.io/git-guide/index.pt_BR.html))
* If what you're about to code isn't at our [issues](https://github.com/bti-imd/API/issues) list, 
submit a new one (that can be a bug report or a new function, by example).
* Git clone this repository in your local machine (if it's already cloned, then git pull it)
* You should find at [README.md file](./README.md) a short guide for setting up your own development environment.
* Create a new git branch and switch to it, keeping in mind **that every issue should have its own and exclusive
branch**.
* If you're using an IDE, then search for its .gitignore, append it to our existing one and git commit it 
(or you may [create a local .gitignore](https://gist.github.com/kelvinst/7d508da482d13bb301c9)), 
since IDEs usually create some meta files that are useful for your personal computer only.
* Start coding in your new branch, following the next section's guidelines.

## Coding style

* It is imperative to **follow [PEP 8](https://www.python.org/dev/peps/pep-0008/)** (here's a tip: install a static code analysis 
plugin, like [Pylint](https://www.pylint.org/), for your favorite IDE or code editor).
* Use English only (of course you don't need to write like a native one), except for output strings (if you think that's awkward, 
read this: ["8 motivos pra programar em inglês"](https://blog.lucascaton.com.br/2015/05/22/8-motivos-pra-programar-em-ingles/)).
* Significant nomenclature for variables, even in the most hidden auxiliar function (if you need help, read this: 
["Em busca do nome adequado: métodos, variáveis e classes"](http://blog.caelum.com.br/em-busca-do-nome-adequado-metodos-variaveis-e-classes/))
* Use constants or variables all the time, avoiding literal values (e.g., instead of ```if age < 18``` it's better to read ```if age < MIN_LEGAL_AGE```).

## Commiting changes

* Commit a change only after everything is ok, i.e., the whole software should run at any commit (future commits can fix a logic bug,
code styles etc, but do not commit something that may crash the whole system).
* Run all tests and please add them in a test folder at repository's root before claiming that your branch is done.
* Use significant (and short) commit titles, and add comments if you feel necessary (please, feel it).
* Reference the issue that you're treating at commit titles (e.g.: you're implementing issue #4 about user authentication, so you ```git checkout -b 4userauth```,
code something, test, and then ```git commit -m "#4 add login function"```), it will help everyone to know that someone is already working in that issue
(GitHub will notice that you commited about an issue if you write it's ID like that).
* Do not try to merge at master anything by yourself, it is dangerous and can disturb someone else's code, so use your branchs only and leave it after you're done,
waiting for the team's review to merge.

## In-code communication

* If you're commiting something that you know it's incomplete, then add, even at your code, a "TODO" comment explaining to yourself what you should do later
(e.g., ```# TODO: test this function to see if it's handling well IO exceptions```).
* "README" comments are accepted as well, and "WARNING"s or other communication that you find necessary.
* Documment all your functions (even in code, see coding style topic about PEP 8), because without it we can't possibly know what your function 
will return, what will happen in case of something goes wrong, what are the expected arguments (variable types, format, accepted numeric interval...).
* While docummenting a function, a file or a variable, keep in mind that no one (not even you!) need to read its scope to understand its behavior.
* You don't need to add comments everywhere, just documment the whole function once (we don't always need to understand how to make the wheel works, 
sometimes we just need to build vehicles quickly!).

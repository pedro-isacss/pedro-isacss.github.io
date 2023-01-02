---
title: Creating a Tic Tac Toe game with Python
by:
  name: Pedro Isac
  link: https://github.com/pedro-isacss
date: 2022-12-30 11:33:00 +0800
categories: [Programming]
tags: [game, python]
math: true
mermaid: true
---
In this post we are going to create a Tic Tac Toe game using Python. The game will not have a graphical interface, it will be via terminal.

## Imports
First, let's import two libraries that we will use to develop the game: **random** (to generate random numbers) and **tabulate** (to create tables).

The random is already a native Python library, so we can import it directly into code. The tabulate library is not native to Python so we need to run the `pip install tabulate` command to install it.

Now just do the imports as follows:

```python
import random
from tabulate import tabulate
```

## Play function
Our game will run from a function called `play`. So now we need to define it and then indicate that the game is starting:

```python
def play():
  print("")
  print("============ START ============")
```

## Game options
Now we need to define two variables: **options** (an array that receives the choice options) and **wins** (a dictionary that indicates which option wins which)

```python
options = ["rock", "paper", "scissors"]
wins = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
}
```

## Get players options
The next step is to receive the players' choices (user and CPU) and store them in the variables **player** and **cpu**.

To receive the user's choice we will do:

```python
print('''
Choose your weapon:

[0] - {0}
[1] - {1}
[2] - {2}
'''.format(options[0], options[1], options[2]))
  
player = int(input("Choose an option: "))
```

To receive the "choice" from the CPU, we'll use the `random.randint` method to generate a random value between 0 and 2, which are the possible indexes of our **options** array:

```python
cpu = random.randint(0, 2)
```

## Get result
Now we need to compare the user and CPU choices and store the winner of the match in a **result** variable. To do this, we will use the **if/else** condition structure, taking into account that:

1. if user and cpu chose the same option then we don't have a winner
2. if the user chose a property from the **wins** dictionary and the CPU chose the value corresponding to that property, then the winner is the user
3. if neither event 1 nor event 2 occurred then the winner is the CPU

Now, just turn these conditions into code:

```python
result = ""

if options[player] == options[cpu]:
  result = "No winners"
elif wins[options[player]] == options[cpu]:
  result = "Player"
else:
  result = "CPU"
```

## Show results
To show the result of the match, we will use the **tabulate** method that we imported from the tabulate library. For this, first, we need to create an array whose first item will be an array with the header of our table (Player, CPU and Winner) and the second item will be an array with the table data (user option, CPU option and match winner):

```python
resultsTable = [
  ['Player', 'CPU', 'Winner'], 
  [options[player], options[cpu], result], 
]
```

Finally it is now possible to show the result of the match:

```python
print('''
=========== RESULTS ===========
{0}
'''.format(tabulate(resultsTable, headers='firstrow', tablefmt='grid')))
```

## Play again
To end our game, we can give the user the option to start a new game. For this we will use the following conditions:

1. if the user types 1, a new game will be started
2. if the user types any other value, the game will be finished

```python
print('''
Play again?

[1] - Yes
[ANY] - No
''')

playAgain = input("Choose an option: ")

if playAgain == "1":
  play()
```

**NOTE:** the **play** function is a recursive function, that is, it is a function that calls itself.

## Starting the game
Finally, call the **play** function so that the game starts as soon as the file is executed:

```python
play()
```

## More
- **Suggestion for improvement:** handle error when user chooses option greater than 2 and less than 0.
- **Code:** <a href="https://colab.research.google.com/drive/1dm-ZPAsBdWAfbTIc1lmFWCbOs12ABd0a?usp=sharing" target="_blank">https://colab.research.google.com/drive/1dm-ZPAsBdWAfbTIc1lmFWCbOs12ABd0a?usp=sharing</a>
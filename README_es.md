[Leer en español (README en español)](README.md)
# Proportional Cost-Sharing

A visually appealing web tool designed to fairly distribute shared expenses based on each participant's income, with a focus on accesibility.

## Project Overview
This tools simplifies the fair distribution of shared costs, assigning each person's contribution based on the percentage their income represents in the total income of all participants.

Unlike equally shared costs, which are only fair if all participants have the same income, proportional cost-sharing allows low-income participants to contribute without placing an undue burden on their finances.

## Features

- **Income-based cost-sharing:** The tool automatically calculates each person's contribution based on their income.
- **Simple and intuitive interface:** A user-friendly, clean interface with clear instructions.
- **Accessible:** Designed to be accessible for users with low vision.

## Installation

To use this tool locally, simply download all the files from this repository into the same directory in your computer, and then open the `index.html` file in any browser.

## Usage
1. **Data insertion:** Insert expenses and income in any order.
2. **Calculate proportions:** With any change in either income or expenses, the tool will automatically calculate the percentage represented by each participant's income and their contribution to the total expense.
3. **Check results:** View the graph and details of each participant's contribution.

## Accessibility
This tool was developed with accessibility in mind:
* **Keyboard navigation:** Interactive elements are accesible via keyboard.
* **ARIA labels and roles:** Important labels and roles for screen readers are used, facilitating navigation for these users. This tool also uses HTML elements that are clearer for screen readers such as `<table>`.
* **Active elements management:** Focused elements are taken into account, enhancing the experience for keyboard and screen reader users.

## Thanks
Thanks to @BarretoJuan for providing feedback on the tool's interface.

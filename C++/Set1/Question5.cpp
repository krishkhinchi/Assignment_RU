// Write a program in C++ to find out profit or loss using user input.

#include <iostream>
using namespace std;
int main(){
    
    int Profit,Lose,Investment,ROI;
    cout << "Enter your Investment: ";
    cin >> Investment;
    cout << "Enter your ROI: ";
    cin >> ROI;

    Profit = ROI-Investment;
    Lose = Investment-ROI;

    if(cin.fail()) cout << "Plz enter numeric value";
    else if(ROI>Investment) cout << "Your profit is = " << Profit;
    else if(Investment>ROI) cout << "Your lose is = " << Lose;
    else cout << "You are not in profit nor in lose";
    return 0;
}
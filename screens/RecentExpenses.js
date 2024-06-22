import { useContext, useEffect, useState } from "react";

import ExpenseOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function RecentExpenses(){
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);
    const expensesCtx = useContext(ExpensesContext);

    useEffect(() => {
        async function getExpenses(){
        setIsFetching(true);
        try{
            const expenses =   await fetchExpenses();
            expensesCtx.setExpenses(expenses);
        }catch(err){
            setError("Could not fetch expenses. Try again later.");
        }
        setIsFetching(false);
        }

        getExpenses();
    }, []);

    function errorHandler(){
        setError(null);
    }

    if (error && !isFetching){
        return <ErrorOverlay message={error} onConfirm={errorHandler}/>
    }

    if (isFetching){
        return <LoadingOverlay />
    }

    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        return (expense.date >= date7DaysAgo) && (expense.date <= today);
    });

    return <ExpenseOutput expenses={recentExpenses} expensesPeriod='Last 7 days' fallbackText="No expenses registered for the last 7 days."/>
}

export default RecentExpenses;
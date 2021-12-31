export const formatDate = date => {
    const newDate = new Date(date);
    const day = newDate.getDate().toString().padStart(2, '0');
    const month = newDate.toLocaleString('default', { month: 'short' });
    const year = newDate.getFullYear();
    return `${day} ${month} ${year}`;
}
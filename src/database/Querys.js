export const queries = {
    getAllUsers: 'SELECT * FROM users',
    addNewUser: 'INSERT INTO users (name) VALUES (@name)',
    getUserById: 'SELECT * FROM users WHERE id = @id',
    deleteUser: 'DELETE FROM users WHERE id = @id',
    getTotalUsers: 'SELECT COUNT(*) FROM users',
    updateUserById: 'UPDATE users SET name = @name WHERE id = @id',

    getRandQuiz: 'SELECT TOP 1 name FROM pregunta WHERE cat_preg_id = 1 ORDER BY NEWID()',
    getRandomResponse: 'SELECT TOP 5 description FROM pregunta ORDER BY NEWID()',
    addActive: 'UPDATE pregunta SET active = @active WHERE id = @id'
    
}
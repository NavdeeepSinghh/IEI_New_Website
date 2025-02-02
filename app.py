from flask import Flask, render_template, session, redirect, url_for, request, flash

app = Flask(__name__)

# Dictionary to track clicks on different links
click_stats = {
    'home': 0,
    'events': 0,
    'osr': 0,
    'sponsors': 0,
    'team': 0,
    'about': 0,
    'contact': 0
}

@app.route('/')
def home():
    click_stats['home'] +=1
    return render_template('home.html')  

@app.route('/events')
def events():
    click_stats['events'] += 1
    return render_template('events.html')

@app.route('/osr')
def osr():
    click_stats['osr'] += 1
    return render_template('osr.html')

@app.route('/sponsors')
def sponsors():
    click_stats['sponsors'] += 1
    return render_template('sponsors.html')

@app.route('/team')
def team():
    click_stats['team'] += 1
    return render_template('team.html')

@app.route('/about')
def about():
    click_stats['about'] += 1
    return render_template('about_us.html')

@app.route('/contact')
def contact():
    click_stats['contact'] += 1
    return render_template('contactus.html')

if __name__ == '__main__':
    app.run(debug=True)


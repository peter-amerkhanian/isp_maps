from flask import Flask, render_template, request
from forms import ProviderForm

app = Flask(__name__)

@app.route('/', methods=["GET", "POST"])
def index():
    form = ProviderForm(request.form)
    print("Hello1")
    if form.validate() and request.method == "POST":
        print("Hello")
        print(form.provider.data)
    return render_template("index.html", form=form)

if __name__ == "__main__":
    app.run(debug=True)





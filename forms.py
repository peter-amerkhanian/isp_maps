from wtforms import Form, StringField, IntegerField

class ProviderForm(Form):
    provider = StringField()
    equipment = StringField()
    frequency = IntegerField()
    bandwith = IntegerField()
    price = IntegerField()
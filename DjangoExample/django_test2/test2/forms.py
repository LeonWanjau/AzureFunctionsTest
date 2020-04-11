from django import forms

class TestForm(forms.Form):
    firstName=forms.CharField()
    lastName=forms.CharField()
    email=forms.EmailField()
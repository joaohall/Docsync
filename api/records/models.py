from django.db import models

class Specializations(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    specialization = models.ForeignKey(Specializations, on_delete=models.CASCADE)
    id = models.AutoField(primary_key=True)

class Tag(models.Model):
    name = models.CharField(max_length=100)
    color = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class MedicalRecord(models.Model):
    date = models.DateField(blank=False)
    name = models.CharField(blank=False, max_length=200)
    age = models.IntegerField(blank=False, null=False)
    photo = models.ImageField(blank=True, null=True)
    gender = models.CharField(blank=False, null=False, max_length=50)
    tags = models.ManyToManyField(Tag)
    diagnosis = models.TextField()
    prescription = models.TextField()
    notes = models.TextField()
    def __str__(self):
        return f"{self.name}'s Medical Record"

from rest_framework import serializers

from .models import MedicalRecord

class MedicalRecordSerializer(serializers.ModelSerializer):
  class Meta:
    model=MedicalRecord
    fields = ('date', 'name', 'age', 'photo', 'gender', 'tags', 'diagnosis', 'prescription', 'notes')

class MedicalRecordCreateSerializer(serializers.ModelSerializer):
  class Meta:
    model = MedicalRecord
    fields = ('date', 'name', 'age', 'photo', 'gender', 'tags', 'diagnosis', 'prescription', 'notes')

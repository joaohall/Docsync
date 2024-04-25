from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.contrib import admin
from django.urls import path

from records.views import MedicalRecordViewSet


router = DefaultRouter()

router.register('MedicalRecords', MedicalRecordViewSet, basename='MedicalRecords')

urlpatterns = [
    path('medicalrecords/', include(router.urls)),
    path('admin/', admin.site.urls),
]
